const isPaired = (arr, len, n) => {
    if (len <= 1) {
        return 0;
    } else {
        if (len != n) {
            return 0;
        } else {
            for (let i = 0; i < len; i++) {
                for (let j = i + 1; j < len; j++) {
                    if (arr[i] + arr[j] == n) {
                        if (i + j == n) {
                            return 1;
                        } else {
                            return 0
                        }
                    } else {
                        return 0

                    }
                }
            }
        }
    }
};

console.log(isPaired([2, 1, 2, 7, 1], 4, 3));