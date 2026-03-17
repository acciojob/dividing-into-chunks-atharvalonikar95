const arr = [1, 2, 3, 4, 1, 0, 2, 2];


const divide = (arr, n) => {
  // Write your code here
	let op=[]
	let sum=0
	let sub=[]
	for(let i=0;i<arr.length;i++){
		if(sum+ arr[i]>n){
			op.push(sub)
			sub=[]
			sum=0
// 			sub.push(arr[i])
        }
		sub.push(arr[i])
		sum+=arr[i]
// 		op.push(sub)
	}
	if (sub.length > 0) {
        op.push(sub);
    }
	// console.log(op)
	return op
	
}; 

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
