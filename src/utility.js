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

export let btnRow = ['.','(',')','/','!','^','rad',
                    '7','8','9','*','log','^2','deg',
                    '4','5','6','+','%','sqrt','sin',
                    '1','2','3','-','e','10^','cos',
                    '0','pi','1/','tan'];