function calculateTipsSelect() {
  const sumMoney = parseFloat(document.getElementById("sumMoney").value);
  const cashierPercent = parseFloat(
    document.getElementById("cashierPercent").value
  );
  const managerPercent = parseFloat(
    document.getElementById("managerPercent").value
  );
  const internPercent = parseFloat(
    document.getElementById("internPercent").value
  );

  const resultElement = document.getElementById("result");

  function calculatePercent(sumMoney, percent) {
    return (sumMoney / 100) * percent;
  }

  const resCashierPercent = calculatePercent(sumMoney, cashierPercent);
  const resManagerPercent = calculatePercent(sumMoney, managerPercent);
  const resInternPercent = calculatePercent(sumMoney, internPercent);

  const resultSelectElement = (
    cashierPercen,
    managerPercent,
    internPercent
  ) => {
    const numbers = [cashierPercen, managerPercent, internPercent];
    let sumWorkers = numbers.reduce((a, b) => a + b, 0);
    return Math.floor((sumMoney - sumWorkers) / 2);
  };

  document.getElementById("cashierResult").textContent = resCashierPercent;
  document.getElementById("managerResult").textContent = resManagerPercent;
  document.getElementById("internResult").textContent = resInternPercent;
  document.getElementById("receivedResult").textContent = resultSelectElement(
    resCashierPercent,
    resManagerPercent,
    resInternPercent
  );
}
