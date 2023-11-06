import { expect } from 'chai';
import { getGateByProject, selectGate } from "../sonar-provider";

describe("select quality gate", () => {
  it.skip("integration test : select a gate", () => {
    const sonarToken = '';
    const organization = 'thefork';
    const projectKey = 'lafourchette_thefork-map';
    const gateId = '91710';

    selectGate(sonarToken, organization, projectKey, gateId);
  });

  it.skip("integration test : get gate by project", async () => {
    const sonarToken = '';
    const organization = 'thefork';
    const projectKey = 'lafourchette_thefork-map';

    const { name } = await getGateByProject(sonarToken, organization, projectKey);
    console.log(name);

    expect(name).to.eql('TheFork Way (Terraform) - exclusion');
  });
});
