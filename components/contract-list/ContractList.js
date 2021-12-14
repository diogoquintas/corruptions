import styled from "@emotion/styled";
import ContractItem from "../contract-item/ContractItem";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ContractList() {
  return (
    <Section>
      <h3>dom</h3>
      <Ul>
        <ContractItem
          title="Corruptions"
          address="0x5BDf397bB2912859Dbd8011F320a222f79A28d2E"
          description="The main contract which contains the ERC-721 interface."
        />
        <ContractItem
          title="CorruptionsMetadata"
          address="0x95bdEc5B5249f217ac9e0D30AEDbDD479611A00b"
          description="The contract that generates the metadata for each corruption or deviation."
        />
        <ContractItem
          title="CorruptionsDataMapper"
          address="0x7A96d95a787524a27a4df36b64a96910a2fDCF5B"
          description="Additional information related to each corruption. You can get information about the deviation status of your corruption here."
        />
        <ContractItem
          title="CorruptionsWiltedRoseDeviationWriter"
          address="0x4500f6e46D485B62eD35926052F04C04f627F637"
          description="The first deviation chapter. The wilted rose, only 64 coUld deviate."
        />
        <ContractItem
          title="CorruptionsTemporalFragmentDeviationWriter"
          address="0x6a00bC9eD4DcE14ed7bA72D01da6ed4746C5792e"
          description="The second deviation chapter. Contains 8 different deviations."
        />
        <ContractItem
          title="CorruptionsDeviationRegistry"
          address="0x40f7ad19c7F37AcD76958d61Cbc783c77411cd9b"
          description="The names of each deviation, their current contract address and linking between tokenId and deviation."
        />
        <ContractItem
          title="CorruptionsDataChannel"
          address="0x90Ccc00699222A9870DbCFb980512a6eA40edB6F"
          description="The portal that receives messages from (*) and (s)."
        />
        <ContractItem
          title="CorruptionsStrangeApparatus"
          address="0xe6F3E72d039563BE214B2762Df39049ce20D2426"
          description="The portal that receives ciphers."
        />
        <ContractItem
          title="CorruptionsCompendium"
          address="0x71D49113AC36E3F63fE239fbca4DF2cBa748708A"
        />
        <ContractItem
          title="CorruptionsPaletteToCharacterHelper"
          address="0x4680bdeB308ce794Ed1Bb86162f8d81ae8477ba8"
        />
        <ContractItem
          title="CorruptionsFont"
          address="0xdf8A48979F33f12952Ab4cF6f960EA4071fc656b"
        />
        <ContractItem
          title="CorruptionsBidirectionalDataMapper"
          address="0x5E0813C763a56Cd5F5cEFe4883D80C275Cc873d8"
        />
        <ContractItem
          title="CorruptionsAscensionMenes"
          address="0xD5192Ba5Bd9415b5e0d09633657129086a5F36c4"
        />
      </Ul>
      <h3>DAO</h3>
      <Ul>
        <ContractItem
          address="0x06EB2100d66558CF8BCc3784420ad549D8D69bf6"
          title="Reflections"
          description="NFT to fund the 8 deviations reserved for the DAO in the second deviation chapter."
        />
        <ContractItem
          address="0x86a103d80798A9202CbA0cEc9F499Cc24eA24FA5"
          title="ReflectionsMetadata"
          description="The contract that generates the token data + image for a reflection."
        />
        <ContractItem
          address="0xFEEDa52dc1c570533B68eFC9a6DaA2D212bCC836"
          title="ReflectionsDataChannel"
          description="The portal created to talk with (*) and (s)."
        />
      </Ul>
    </Section>
  );
}
