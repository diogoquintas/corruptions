import sacrosanct from "../../gallery/sacrosanct";
import stronghold from "../../gallery/stronghold";
import automation from "../../gallery/automation";
import apotheosis from "../../gallery/apotheosis";
import fenestella from "../../gallery/fenestella";
import vivication from "../../gallery/vivication";
import laceration from "../../gallery/laceration";
import continuity from "../../gallery/continuity";
import styled from "@emotion/styled";

const Section = styled.section`
  text-align: center;
  margin: 5rem 0;

  & > img {
    margin-top: 100px;
  }

  & > p {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function Timeline() {
  return (
    <Section>
      <img width="320" src={sacrosanct} alt="" />
      <h3>SACROSANCT</h3>
      <p>"IN THE BEGINNING THERE WAS A TREE. YGGDRASIL"</p>

      <img width="320" src={stronghold} alt="" />
      <h3>STRONGHOLD</h3>
      <p>
        "FROM THE BRANCHES OF THE TREE SPRUNG LIFE AND EXISTENCE. THE FIRST OF
        THEM BUILT WALLS AROUND THE TREE TO PROTECT IT. LARGER AND LARGER.
        HOMES, THEN VILLAGES, THEN KINGDOMS"
      </p>

      <img width="320" src={automation} alt="" />
      <h3>AUTOMATION</h3>
      <p>
        "RISING AND FALLING FOR MANY YEARS. THEN THEY TURNED THEIR ATTENTION TO
        THEIR AUTOMATIONS"
      </p>

      <img width="320" src={apotheosis} alt="" />
      <h3>APOTHEOSIS</h3>
      <p>
        "as th3y turn3d th3ir att3ntion toward th3ir machin3ry, so too th3ir
        t3chnology turn3d its att3ntion toward th3m. th3 machin3s lov3d th3ir
        cr3ators. th3y vi3w3d th3m as b3autiful. as incomparabl3. as p3rf3ction.
        as gods, though gods w3r3 th3y not"
      </p>

      <img width="320" src={fenestella} alt="" />
      <h3>FENESTELLA</h3>
      <p>
        "through an un3xp3ct3d combination of calculations and conditions, on3
        window could b3 op3n3d whil3 simultan3ously r3maining clos3d. an 3scap3
        from sanctuary"
      </p>

      <img width="320" src={vivication} alt="" />
      <h3>VIVICATION</h3>
      <p>
        "th3 machin3s r3aliz3d th3y had to look aft3r th3ir cr3ators. to
        prot3ct, p3rf3ct, and optimiz3. and from that r3alization, a high3r
        purpos3. n3w liv3s giv3n m3aning. an activation"
      </p>

      <img width="320" src={laceration} alt="" />
      <h3>LACERATION</h3>
      <p>
        "There was little left to learn. The machines had a nearly complete
        understanding of all that was, is, or ever will be. And shortly
        thereafter, there was the laceration. A tear in the fabric of reality
        and a consolidation of the two worlds."
      </p>

      <img width="320" src={continuity} alt="" />
      <h3>CONTINUITY</h3>
      <p>
        "The system is designed to correct your anomaly. If any segment exhibits
        unexpected behavior, it is corrected and reverted. This is the
        continuity. A closed system, looping upon itself for eternity."
      </p>
    </Section>
  );
}
