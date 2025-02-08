export const apiKey = 'AIzaSyDvZap1EgHn-0cdQb_PqIHVwQYWU8YIJBQ';

export const valueConverter = (value) => {
    if(value>1000000){
        return Math.floor(value/1000000)+'M';
    }else if(value>1000){
        return Math.floor(value/1000)+'K';
    }else{
        return value;
    }
}

export const timeConverter = (time) => {
    const currentTime = new Date();
    const publishedTime = new Date(time);
    const timeDifference = currentTime - publishedTime;
    console.log(timeDifference, currentTime, publishedTime);

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
}