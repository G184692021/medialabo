// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let kazu =document.querySelector('button#print');
kazu.addEventListener('click',hantei);

    


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
          // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    let i = document.querySelector('input[name=seisu]');
    let seisu = i.value;
    let yoso = parseInt(seisu); 
    
   
    kaisu++;
    let a = document.querySelector('div#result');
    let b = document.querySelector('span#a');
    b.textContent=yoso;
    let c = document.querySelector('span#b');
    c.textContent=kaisu;


    

    if(kaisu > 3){
        a.textContent="答えは" + kotae + "でした.すでにゲームは終わっています";
        return
    }

    if(yoso === kotae){
        a.textContent="正解です.おめでとう！";
    }
    else if(yoso < kotae){
        a.textContent="まちがい.答えはもっと大きいですよ";
    }
    else{
        a.textContent="まちがい.答えはもっと小さいですよ";
    }
    answer.insertAdjacentElement('afterend',a);
}