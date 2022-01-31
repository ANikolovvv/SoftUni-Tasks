function calculator() {
  // TODO:
  const selector = { s1: "", s2: "", output: "" };
  const operator={sum:'+',sub:'-'};

  function calc(n1,n2,op) {
      n1=Number(n1);
      n2=Number(n2);
      let total=op==='+'?n1+n2 :n1-n2;
      return total
  }

  return {
    init(s1, s2, output) {
      selector.s1 = document.querySelector(s1);
      selector.s2 = document.querySelector(s2);
      selector.output = document.querySelector(output);
    },
    add() {
        selector.output.value=calc(selector.s1.value,selector.s2.value,'+')
    
    },
    subtract(){
        selector.output.value=calc(selector.s1.value,selector.s2.value,'-')
    }
  };
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
