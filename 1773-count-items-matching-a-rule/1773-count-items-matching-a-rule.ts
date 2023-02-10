function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let check: number;
    let incr = 0;
    if (ruleKey === 'type') {
        check = 0;
    }
    else if (ruleKey === 'color') {
        check = 1;
    }
    else if (ruleKey === 'name') {
        check = 2;
    }
    for (let i = 0; i <= items.length - 1; i++) {
        if (items[i][check] == ruleValue) {
            incr++;
        }
    }

    return incr;
};