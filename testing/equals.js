export const strictEquals = (a, b) => {
    if ((a == 0 && b == -0) || (a == -0 && b == 0)) {
        return true;
    }
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return false;
    }

    return Object.is(a, b);
};

