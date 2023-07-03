const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('rfsdfs', 10);

function isPalendrom(rawString) {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

isPalendrom('Т оп   от');
