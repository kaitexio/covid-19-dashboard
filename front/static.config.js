// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org
import axios from 'axios'


export default {
    getRoutes: async () => {
        const {data: posts} = await axios.get(
            'http://api:5000/download'
        )
        return [
            {
                path: '/',
                getData: async () => ({
                    posts,
                }),
            }]
    }
}
