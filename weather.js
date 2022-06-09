let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log(data.name);
console.log(data.main.temp_max);
console.log(data.main.temp_min);
let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


let ts;
function sendRequest() {
  let i = document.querySelector('input[name="tenki"]');
  let tenki = i.value;

  let tosi = [
    { id: 360630, name: 'カイロ' },
    { id: 524901, name: 'モスクワ' },
    { id: 993800, name: 'ヨハネスブルク' },
    { id: 1816670, name: '北京' },
    { id: 1850147, name: '東京' },
    { id: 1880252, name: 'シンガポール' },
    { id: 2147714, name: 'シドニー' },
    { id: 2643743, name: 'ロンドン' },
    { id: 2968815, name: 'パリ' },
    { id: 3451189, name: 'リオデジャネイロ' },
    { id: 5128581, name: 'ニューヨーク' },
    { id: 5368361, name: 'ロサンゼルス' }
  ];

  for (let i = 0; i < tosi.length; i++) {
    if (tenki === tosi[i].name) {
      ts = tosi[i].id;
      issei = tosi[i].name + "の天気";
      break;
    } else {
      issei = tenki + "はないよ(> <)";
    }
  }




  // 通信を開始する処理


  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + ts + '.json';

  // 通信開始
  axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);      // 通信の最後の処理
}
console.log()

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }




  let ti = document.querySelector('#takahashi');
  ti.textContent = issei;
  // data をコンソールに出力
  console.log(data);
  let shou = document.querySelector('#nojima');
  shou.textContent = data.weather[0].description;
  let takanori = document.querySelector('#iwata');
  takanori.textContent = data.main.temp_max + "℃";
  let ryouma = document.querySelector('#takeuti');
  ryouma.textContent = data.main.temp_min + "℃";
  let masaki = document.querySelector('#suda');
  masaki.textContent = data.main.temp_min + "%";
  let kento = document.querySelector('#yamazaki');
  kento.textContent = data.wind.speed + "m/s";
  // data.x を出力
  console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

