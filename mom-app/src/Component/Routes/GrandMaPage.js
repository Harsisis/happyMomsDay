import "../../Style/Pages.css";
import kangoo from "../../Style/images/kangoo.png"

function GrandMomPage() {
    return (
        <div className="pages">
            <div className="container">
                <div className="container-title">
                    <h3>Bon anniversaire mamie !</h3>
                </div>
                <div className="container-body">
                    <h4>Je vous souhaite de passer un bon séjour en Alsace !</h4> <br></br>
                    <img className="table-big-image" src={kangoo} alt="kangoo"></img>
                </div>
            </div>
        </div>
    );
  }
  
  export default GrandMomPage;