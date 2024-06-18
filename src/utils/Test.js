let str = ['h', 'e', 'l', 'l', 'o'];
let left = 0;
let right = str.length - 1;
while (left < right) {
  let temp = str[right];
  str[right] = str[left];
  str[left] = temp;
  left++;
  right--;
}
console.log(str);
//////////////check for palindrome/////////
function isPalindrome() {
  let str = ['h', 'e', 'l', 'l', 'e', 'h'];
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}
console.log('isPalindrome', isPalindrome());
