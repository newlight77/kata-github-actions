import * as core from '@actions/core';
import axios from 'axios';


const host = "https://sonarcloud.io";
const baseUrl = "/api/api/qualitygates";

export async function selectGate(token: string, projectKey: string, gateName: string) {
    try {

        core.debug(`Switching the quality gate of ${projectKey} to ${gateName}`);

        const url = `${host}${baseUrl}/get_by_project`;

        await axios.post(url, {
            projectKey: projectKey
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

export async function getGateByProject(token: string, projectKey: string): Promise<string> {
    try {
        core.debug(`Getting the current quality gate for ${projectKey}`);

        const url = `${host}${baseUrl}/get_by_project?projectKey=${projectKey}`;

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