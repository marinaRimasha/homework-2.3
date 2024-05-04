let userBalance = 500;
let packageCost = 100;
let smsCode = "A001DFX0";
let cellID = 4;
const postLockerDB = [null, null, null, "1432HGF", null];

const packageInd = postLockerDB.findIndex(code => code === smsCode);
if (packageInd != -1 && userBalance - packageCost >= 0) {
  userBalance -= packageCost;
  console.log(
    "Заберите посылку " +
      smsCode +
      " из ячейки №" +
      cellID +
      ". Ваш счет составляет: " +
      userBalance +
      "ед."
  );
} else {
  console.log(
    "Извините, посылка " +
      smsCode +
      " не найдена! Проверьте код и попробуйте ещё раз!"
  );
}
