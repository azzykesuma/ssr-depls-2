import IconBxlFacebook from './FacebookIcon';
import IconBxlTiktok from './TiktokIcon';
import IconBxlInstagram from './InstagramIcon';
import IconBxlLinkedin from './LinkedInIcon';
import IconBxlTwitter from './TwitterIcon';
import IconBxlYoutube from './YoutubeIcon';

const SocialsIcon = ({ iconType, size }: { iconType: string, size: string }) => {

  {
    switch (iconType) {
      case "tiktok":
        return <IconBxlTiktok height={size} width={size} fill='white' />
        break;
      case "facebook":
        return <IconBxlFacebook height={size} width={size} fill='white' />
        break;
      case "instagram":
        return <IconBxlInstagram height={size} width={size} fill='white' />
        break;
      case "linkedin":
        return <IconBxlLinkedin height={size} width={size} fill='white' />
        break;
      case "twitter":
        return <IconBxlTwitter height={size} width={size} fill='white' />
        break;
      case "youtube":
        return <IconBxlYoutube height={size} width={size} fill='white' />
        break;
      default:
        return iconType
    }
  }
}

export default SocialsIcon
