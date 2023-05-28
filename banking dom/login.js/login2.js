document.getElementById("btn1").addEventListener("click", function () {
  const input1 = document.getElementById("deposit");
  const text1 = input1.value;
  if (text1 === "") {
    alert("Deposit Must Not Be Empty");
  } else {
    const depositAmount = document.getElementById("depositamount");
    //clear text
    input1.value = "";
    const depositAmountValue = depositAmount.innerText;
    //add deposite money
    const depositCal = (depositAmount.innerText =
      parseFloat(text1) + parseFloat(depositAmountValue));

    depositAmount.innerText = depositCal;

    //total balance
    const Balance = document.getElementById("balance");
    const balanceText = Balance.innerText;
    Balance.innerText = parseFloat(text1) + parseFloat(balanceText);
  }
});
document.getElementById("btn2").addEventListener("click", function () {
  const input2 = document.getElementById("witdraw");
  const text2 = input2.value;
  if (text2 === "") {
    alert("Withdraw Must Not Be Empty");
  } else {
    const witdrawAmount = document.getElementById("witdrawamount");
    //clear text
    input2.value = "";
    const witdrawAmountValue = witdrawAmount.innerText;
    //add witdraw money
    const witdrawCal = (witdrawAmount.innerText =
      parseFloat(text2) + parseFloat(witdrawAmountValue));

    witdrawAmount.innerText = witdrawCal;
    //total balance
    const Balance = document.getElementById("balance");
    const balanceText = Balance.innerText;
    Balance.innerText = parseFloat(balanceText) - parseFloat(text2);
  }
});
