import { calculateInvestmentResults , formatter } from "../util/investment"

export default function Results({result}){
    const resultdata = calculateInvestmentResults(result);
    console.log(resultdata);
    const initialinvestment = resultdata[0].valueEndOfYear - resultdata[0].annualInvestment - resultdata[0].interest;

    return (
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value </td>
                    <td>Interset (Year)</td>
                    <td>Total Interset</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {resultdata.map((yeardata) =>{
                    const totalinterset = yeardata.valueEndOfYear - (yeardata.annualInvestment * yeardata.year) - initialinvestment;

                    const Investedcap = yeardata.valueEndOfYear - totalinterset;

                    return <tr key={yeardata.year} >
                        <td>{yeardata.year}</td>
                        <td>{formatter.format(yeardata.valueEndOfYear)}</td>
                        <td>{formatter.format(yeardata.interest)}</td>
                        <td>{formatter.format(totalinterset)}</td>
                        <td>{formatter.format(Investedcap)}</td>

                    </tr>
                })}
            </tbody>


        </table>
    )
   
}