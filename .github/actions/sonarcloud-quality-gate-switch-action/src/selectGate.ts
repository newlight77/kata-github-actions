import * as core from '@actions/core';
import axios from 'axios';


const host = "https://sonarcloud.io";
const baseUrl = "/api/qualitygates";

export async function selectGate(sonarToken: string, organization: string, projectKey: string, gateId: string) {
    try {

        core.debug(`Switching the quality gate of ${projectKey} to ${gateId}`);

        const url = `${host}${baseUrl}/select?organization=${organization}&projectKey=${projectKey}&gateId=${gateId}`;

        console.log(`calling sonarcloud url=${url} organization=${organization} projectKey=${organization} gate=${gateId}`);

        const response = await axios.post(url, {}, { 
            // headers : {
            //     "Content-Type": "application/x-www-form-urlencoded"
            // },
            auth: {
                username: sonarToken,
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