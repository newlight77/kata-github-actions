import * as core from '@actions/core';
import { selectGate } from './selectGate';

async function run() {
    const sonarToken: string = core.getInput('sonarcloudToken');
    const organization: string = core.getInput('organization');
    const projectKey: string = core.getInput('projectKey');
    const gateId: string = core.getInput('tmpGateId');

    selectGate(sonarToken, organization, projectKey, gateId);
}

run();
