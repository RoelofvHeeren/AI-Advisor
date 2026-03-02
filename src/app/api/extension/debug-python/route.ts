import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
    const results: any = {};
    const binaries = ['python3', 'python', '/opt/venv/bin/python'];

    for (const bin of binaries) {
        results[bin] = { exists: false, module_installed: false, error: null };
        try {
            await execAsync(`${bin} --version`);
            results[bin].exists = true;

            try {
                await execAsync(`${bin} -c "import youtube_transcript_api"`);
                results[bin].module_installed = true;
            } catch (modErr: any) {
                results[bin].module_error = modErr.message;
            }
        } catch (binErr: any) {
            results[bin].error = binErr.message;
        }
    }

    try {
        const { stdout, stderr } = await execAsync(`pip list`);
        results.pip_list = { stdout, stderr };
    } catch (e: any) {
        try {
            const { stdout, stderr } = await execAsync(`pip3 list`);
            results.pip_list = { stdout, stderr };
        } catch (e2: any) {
            results.pip_list = { error: e2.message };
        }
    }

    return NextResponse.json(results);
}
