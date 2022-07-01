# HTML + Javascript Exercise
​
### Knowledge round-up
​
- **Javascript**
​
  - What are the differences between a variable that is: `null`, `undefined`?
  + undefined là khi 1 biến đã khai báo nhưng chưa gán giá trị, loại của undefined là undefined.
  + null là giá trị mà biến đó được gán, loại của null là object
  (null == undifined --> true nhưng null ===undifiend --> false) 

  - What is `use strict`? what are the advantages and disadvantages to using it?
  `use strict` là một phương pháp tự động thực hiện phân tích cú pháp chặt chẽ hơn và xử lý lỗi khi mã JavaScript đang chạy. Chế độ này làm cho Javascript chạy trong các điều kiện nghiêm ngặt hơn.
  + advantages: 
        1. Loại bỏ một số khía cạnh không hợp lý và không chính xác của cú pháp Javascript và giảm một số hành vi kỳ lạ;
        2. Loại bỏ một số khía cạnh không an toàn của hoạt động mã và đảm bảo an toàn của hoạt động mã;
        3. Cải thiện hiệu quả của trình biên dịch và tăng tốc độ chạy;
        4. Mở đường cho phiên bản Javascript mới trong tương lai;
  + disadvantages: Bây giờ trang web JS sẽ được nén, một số tệp sử dụng chế độ nghiêm ngặt, trong khi những tệp khác thì không. Lúc này, những tập tin này ban đầu ở chế độ nghiêm ngặt, sau khi được hợp nhất, chuỗi ký tự lọt vào giữa tập tin, không những không biểu thị chế độ nghiêm ngặt mà còn lãng phí số byte sau khi nén.

  - What are the differences between `==` and `===`? Write an example for each case (if any)?
  + Cả hai đều dùng để so sánh, nhưng "==" có thể dùng với bất kỳ kiểu dữ liệu nào còn "===" chỉ dành cho cùng kiểu.
  + ví dụ
  ```js
   var x = 2;
      var y = "2";
      (x == y)  // Trả về true vì cả hai cùng giá trị

      (x === y) // Trả về false vì typeof x là "number" còn typeof y là "string
  ```
  - Give a list of `Falsy` values in Javascript.
  ```js
  false, 0, "",'',``,null,undefined,NaN
  ```

  - Give an example for each of the following methods in Javascript
    + map
    + filter
    + reduce
    + find
    + some
    ```js
    //map
    let arr=[1,2,3,4]
    let newArr=arr.map(x=>x+1) //--> newArr=[2,3,4,5] và arr=[1,2,3,4]

    //filter:
    let  arr=[-1,-4,0,5]
    let a= arr.filter(e=>e>-1) // --> a[0,5] 

    //reduce:
    let arr=[1,2]
    let total=arr.reduce((a,b)=>a+b) // --> total=3

    //find:
      const arr = [
        { id: 1, name: "Hải" },
        { id: 2, name: "Doanh" },
        { id: 3, name: "Việt" },
      ]

    arr.find(element => element.id === 3) //-------> Kết quả : {id: 3, name: "Việt"}

    myAwesomeArray.find(element => element.id === 6) //---> kết quả undefined

    //some:
    let my = ["a", "b", "c", "d", "e"]

    my.some(test => test === "c") //-------> Kết quả : true
    ```
  - Give an example for add a new element to an array[] (at the end)
  ```js
  let a=[1,2,3]
  let endIndex=a.length
  a[endIndex]=4 //--> a=[1,2,3,4]
  ```

  - Give an example for add a new element to an array[] (at the beginning)
  ```js
  let a=[1,2,3]
  let b=[0]
  a=b.concat(a) // ---> a=[0,1,2,3,4]

  ```
  - Give an example for removing an element in array[]
  ```js
  let list = ["dang", "van", "ty", "20"];
      
      list.pop() // list=["dang", "van", "ty"]
  ```
​
### Playground
1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
```
Input: a = 5, b = 10
Output: 15
​
Input: a = 5, b = 5
Output: 30
```

```js
  function bai1 (a,b){
    let output=0
    if(a===b){
      output = (a+b)*3
    }else{
      output = a + b
    }
    return output
  }
```
​
2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
​
```
Input: a = 12
Output: 7
​
Input: a = 19
Output: 0
​
Input: a = 22
Output: 9
```

```js
  function bai2 (a){
    let output=0
    if(a>19){
      output = (a-19)*3
    }else{
      output=19-a
    }
    return output
  }
```
​
3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
​
```
Input: a = '1*9'
Output: ['129', '159', '189']
```
​
```
Input: a = '1234567890*'
Output: ['12345678900', 
 '12345678903', 
 '12345678906', 
 '12345678909']
```

```js
  function bai3 (a){
    let output=[]
    for(i=0;i<10;i++){
      let b = a.replace('*',i)
      if(b%3===0){
        output.push(b)
      }
    }
    return output
  }

```
​
4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
​
```
Input: a = '1*9'
Output: []
```
​
```
Input: a = '1234567890*'
Output: ['12345678900', 
 '12345678906']
```

```js
  function bai4 (a){
    let output=[]
    for(i=0;i<10;i++){
      let b = a.replace('*',i)
      if(b%6===0){
        output.push(b)
      }
    }
    return output
  }

```