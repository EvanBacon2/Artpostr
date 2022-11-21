import { ReactComponent as Twitter } from '../svg/twitter.svg'
import { ReactComponent as Pinterest } from '../svg/pinterest.svg'
import { ReactComponent as Reddit } from '../svg/reddit.svg'
import { ReactComponent as Tumblr } from '../svg/tumblr.svg'

const SiteIcon = ({ site, className }) => {
    switch (site) {
        case "twitter":
            return <Twitter className={className} />
        case "pinterest":
            return <Pinterest className={className} />
        case "reddit":
            return <Reddit className={className} />
        case "tumblr":
            return <Tumblr className={className} />
        default:
            return <div />
    }
}

export default SiteIcon