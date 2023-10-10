import * as core from '@actions/core';
import axios from 'axios';


const host = "https://sonarcloud.io";
const baseUrl = "/api/api/qualitygates";

export async function selectGate(token: string, organization: string, projectKey: string, gateId: string) {
    try {

        core.debug(`Switching the quality gate of ${projectKey} to ${gateId}`);

        const url = `${host}${baseUrl}/select`;

        await axios.post(url, {
            organization: organization,
            projectKey: projectKey,
            gateId: gateId
        }, { 
            auth: {
                username: token,
                password: ''
            }
        });

    } catch (error) {
        // Fail the workflow run if an error occurs
        if (error instanceof Error) core.setFailed(error.message)
    }
}

export async function getGateByProject(token: string, projectKey: string, organization: string): Promise<string> {
    try {
        core.debug(`Getting the current quality gate for ${projectKey}`);

        const url = `${host}${baseUrl}/get_by_project?project=${projectKey}&organization=${organization}`;

        return await axios.get(url, { 
            auth: {
                username: token,
                password: ''
            }
        });

    } catch (error) {
        // Fail the workflow run if an error occurs
        if (error instanceof Error) core.setFailed(error.message)
        return '';
    }
}