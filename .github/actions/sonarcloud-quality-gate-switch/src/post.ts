import * as core from '@actions/core';
import { selectGate } from './selectGate';

async function run() {
    const sonarToken: string = core.getInput('sonarcloudToken');
    const projectKey: string = core.getInput('projectKey');
    const gateName: string = core.getInput('currentGateName');

    selectGate(sonarToken, projectKey, gateName);
}

run();
