import { useState } from 'react'
import { motion } from 'framer-motion'
import './index.scss'

const AcceptCookies = () => {
    const [isAnimating, setIsAnimating] = useState(false)
    const close = () => {
        setIsAnimating(prev => !prev)
    }

    return (
        <motion.div
            initial={{
                opacity: 1
            }}
            animate={{
                opacity: isAnimating ? 0 : 1,
            }}
            className='accept-cookies'
        >
            By continuing to use this website, you consent to the use of cookies
            in accordance with our Cookie Policy.
            <button onClick={close}>Ok</button>
        </motion.div>
    )
}

export default AcceptCookies
