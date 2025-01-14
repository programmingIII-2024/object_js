function object_print()
{
	// オブジェクトの定義
	const person =
	{
		// プロパティ(オブジェクトの保持するデータ)
		age: 5,
		weight: 80.0,

		// メソッドの定義
		show_age: function()
		{
			alert("年齢は"+this.age+"です");
		},

		// 引数ありのメソッド
		set_age: function(age)
		{
			this.age = age;
			return 0;
		},

		// ES2015からは以下にも書ける
		set_weight(weight)
		{
			this.weight = weight;
			return 0;
		}

	};

	alert(person.age);	// オブジェクトのプロパティへのアクセスは.を使う

	//personオブジェクトはconstだがプロパティは代入できる
	person.weight = 40.0;
	alert(person.weight);

	// personオブジェクトに新たなプロパティを追加もできる
	person.height = 165.0;
	alert(person.height);

	// プロパティは.では無く、['name']でもアクセスできる。
	person['TV'] = "fuji";		// person.TV = "fuji"と同じ
	alert(person.TV);

	// メソッドの呼び出し

	person.set_age(50);
	person.set_weight(100);
	person.show_age();

	//personオブジェクト自身の変更はエラーになる
	person=40;
}
