import { selectGate } from "../selectGate";

describe("logger", () => {
  
  it("test select a gate", () => {
    
    const sonarToken = '';
    const organization = 'thefork';
    const projectKey = 'lafourchette_thefork-map';
    const gateId = '91710';

    selectGate(sonarToken, organization, projectKey, gateId);
  });
});
