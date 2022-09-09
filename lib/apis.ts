
/**
 * Nguyen Ba Hai
 * 09/09/2022
 * Function to get node_id path
 */
export async function getApiPath() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const posts = [await res.json()]
    return posts.map((post) => ({
        params: {id: post.node_id},
    }))
}

/**
 * Nguyen Ba Hai
 * 09/09/2022
 * Function to get data
 */
 export async function getApiData() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    return await res.json()
}

