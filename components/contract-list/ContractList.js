import ContractItem from "../contract-item/ContractItem";

export default function ContractList() {
  return (
    <section>
      <h3>Contracts</h3>
      <section>
        <h4>dom</h4>
        <ul>
          <ContractItem
            title="Corruptions"
            address="0x5BDf397bB2912859Dbd8011F320a222f79A28d2E"
          />
          <ContractItem
            title="CorruptionsMetadata"
            address="0x2688212B769B693254D054f7E4b0d86E9462373b"
          />
          <ContractItem
            title="CorruptionsFont"
            address="0xdf8A48979F33f12952Ab4cF6f960EA4071fc656b"
          />
          <ContractItem
            title="CorruptionsDataMapper"
            address="0x7A96d95a787524a27a4df36b64a96910a2fDCF5B"
          />
          <ContractItem
            title="CorruptionsTemporalFragmentDeviationWriter"
            address="0x6a00bC9eD4DcE14ed7bA72D01da6ed4746C5792e"
          />
          <ContractItem
            title="CorruptionsWiltedRoseDeviationWriter"
            address="0x4500f6e46D485B62eD35926052F04C04f627F637"
          />
          <ContractItem
            title="CorruptionsDeviationRegistry"
            address="0x40f7ad19c7F37AcD76958d61Cbc783c77411cd9b"
          />
          <ContractItem
            title="CorruptionsPaletteToCharacterHelper"
            address="0x4680bdeB308ce794Ed1Bb86162f8d81ae8477ba8"
          />
          <ContractItem
            title="CorruptionsDataChannel"
            address="0x90Ccc00699222A9870DbCFb980512a6eA40edB6F"
          />
          <ContractItem
            title="CorruptionsStrangeApparatus"
            address="0xe6F3E72d039563BE214B2762Df39049ce20D2426"
          />
        </ul>
      </section>
      <section>
        <h4>community</h4>
        <ul>
          <ContractItem
            address="0xFEEDa52dc1c570533B68eFC9a6DaA2D212bCC836"
            title="ReflectionsDataChannel (from the community)"
          />
          <ContractItem
            address="0x06EB2100d66558CF8BCc3784420ad549D8D69bf6"
            title="Reflections (from the community)"
          />
          <ContractItem
            address="0x7572f8cC39266AEa2A29cAd3536C8f8904a599f8"
            title="ReflectionsMetadata (from the community)"
          />
        </ul>
      </section>
    </section>
  );
}
