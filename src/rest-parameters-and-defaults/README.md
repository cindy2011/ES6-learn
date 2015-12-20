# 不定参数和默认参数
## 不定参数
参数名前加`...`。在函数中不定参数的值是一个数组。如
```
var addFn = (...vals) => {
		return vals.reduce((prev, curr)=>{
			return prev + curr;
		}, 0);
	}
```

## 默认参数
给函数参数设置默认值，如果不传值的话。