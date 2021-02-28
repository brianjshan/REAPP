import MobileNav from "../components/home/navBar";
import Footer from "../components/home/footer";

export default function Calculator() {
  return (
    <div>
      <MobileNav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            backgroundColor: "lightgray",
            width: "60%",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <h1>Mortgage Calculator</h1>
          <h2>Estimate how much your monthly mortgage will be!</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://www.mortgagecalculator.org/webmasters/?downpayment=50000&homevalue=300000&loanamount=250000&interestrate=4&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0"
          style={{
            width: "80%",
            height: "1200px",
            border: "0",
          }}
        ></iframe>
        <div
          style={{
            fontFamily: "Arial",
            height: "36px",
            top: "-36px",
            padding: "0 8px 0 0",
            boxSizing: "border-box",
            textAlign: "right",
            background: "#f6f9f9",
            border: "1px solid #ccc",
            color: "#868686",
            lineHeight: "34px",
            fontSize: "12px",
            position: "relative",
          }}
        >
          <a
            style={{ color: "#868686", paddingLeft: "10px" }}
            href="https://www.mortgagecalculator.org/free-tools/javascript-mortgage-calculator.php"
            target="_blank"
          >
            Javascript Mortgage Calculator by MortgageCalculator.org
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
