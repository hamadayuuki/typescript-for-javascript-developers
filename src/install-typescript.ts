let message: string = "Hello TypeScript!";
console.log({message});



// エイリアス
type Profile = {
    name : string;
    age : number;
}
const example2 : Profile = {
    name : "Hamada" , 
    age : 20
};


// インターフェイス
interface ObjectInterface {
    name : string;
    age : number;
}
let object : ObjectInterface = {
    name : "Hamada" , 
    age : 20
};


// 型安全 (isFinished に定義された型以外のものを代入するとエラーが起きることを確認)
let isFinished : boolean = true;
// isFinished = 1;


// UnKnown型 , typeofを使い型が確定されてから使用できる
const func1 = (): number => 43;

let numberAny: any = func1();
let numberUnknown: unknown = func1();

let sumAny = numberAny+ 10;   // 正常に実行できる
//let sumUnknown = numberUnknown + 10;   // エラーが発生する
if (typeof numberUnknown === "number") {
    let sumUnknown = numberUnknown + 10;   // numberUnknown の型が不明のため,実行したらエラーが起こるかもしれないという エラーが発生する
    console.log(sumUnknown);
}



// intersecton型 , 既存の型を生かしつつ合理的な型を作成していく
type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed : 154
};
const OchiaiHiromitu: Batter1 = {
    //throwingSpeed: 154 ,   // throwingSpeed がBatteer1に存在せずエラーが発生する
    battingAverage: 0.367
};

type TwoWayPlayer = Pitcher1 & Batter1;   // 2つのtypeを合成し,新しくtypeを作成する
const OtaniShohei: TwoWayPlayer = {
    throwingSpeed: 165 , 
    battingAverage: 0.286
};


// union型 , 対応可能な型を複数指定
let value: number | string = 1;
value = "foo";


// enum型 , 自動的に要素へ番号が当てられる
enum Months {
    January ,
    February , 
    March , 
    April , 
    May , 
    Jun , 
    July , 
    August , 
    September , 
    October , 
    November , 
    December
};

console.log(Months.January);
console.log(Months[0]);
console.log(Months.October);


// 関数の定義
let bmi1 = (height: number , weight: number): number => {
    return weight / (height * height);
}

// 関数の定義 , 関数を変数に代入する場合
// const func1 = (引数名: 型 , ...) => {
//     関数内の処理
// };


// 関数の引数をオプショナルなものにする , 引数名に ? をつけるとオプショナル(値が渡されなかった場合無視する)と扱われる
let bmi2 = (height: number , weight: number , printable?: boolean): number => {
    return weight / (height * height);
}


// オーバーロード
function double(value: number): number;
function double(value: number): number;


// function double(value: number): number {
//     return value * 2;
// }

// function double(value: string): string {
//     return value * 2;
// }

function double(value: any): any {
    if ( typeof value === "number" ) {
        return value * 2;
    } else if ( typeof value === "string" ) {
        return value + value;
    } 
    // function double の定義を行っているため, number と string 以外の型は入ってこない
    // else {
    //     throw "number でも string でも無いので,引数の型を確認してください"
    // }
    return value * 2;
}



