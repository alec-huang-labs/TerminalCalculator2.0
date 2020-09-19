export function shortDate(){
    let today = new Date();
    let month = today.getMonth() + 1;
    return (
      today.getFullYear() +
      "-" +
      month +
      "-" +
      today.getDate() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds() +
      ":" 
    )
}

export let btnRow = ['.','(',')','/','!','pi','rad',
                    '7','8','9','*','e','10^','deg',
                    '4','5','6','+','^','log','sin',
                    '1','2','3','-','%','sqrt','cos',
                    '0','1/','log10','tan'];