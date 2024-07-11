/**
 * @param {{
 * 	repo_name: string,
 * 	provider: 'github' | 'gitlab'
 * }} params
 * @param {boolean} create_new
 * @returns {Promise<import('../../deploy.js').DeploymentResponse>}
 */
export function push_site({ repo_name, provider }: {
    repo_name: string;
    provider: 'github' | 'gitlab';
}, create_new?: boolean): Promise<import('../../deploy.js').DeploymentResponse>;
export function build_site_bundle({ pages, symbols }: {
    pages: any;
    symbols: any;
}): Promise<any[]>;
