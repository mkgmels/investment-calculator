import { calculateInvestmentResults, formatter } from "../util/investment.js";
import { useState } from "react";

export default function Table({data}) {
  const resultData = calculateInvestmentResults(data);
  console.log(data)
  console.log(resultData)

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((result, index) => (
          <tr key={index}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.investmentCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
