

export const formatUpdatedAt = (uat: string | undefined): string => {
    let final: string;
    if(!uat){
        final = "Unknown";
        return final;
    }
    let tSplit: number = uat.indexOf('T');
    let first: string = uat.substring(0, tSplit);
    let second: string = uat.substring(tSplit + 1, uat.indexOf('.'));
    final = `${first} at  ${second}`;
    if(final.length <= 0){
        return "Unknown";
    }
    return final; 
}