def solution(s):
    """
    :param s: str
    :return: int
    """

    romanNumDocList = romanNumDocs()

    result = 0
    while len(s) != 0:
        for romanNumDoc in romanNumDocList:
            if s.startswith(romanNumDoc['romanNum']):
                s = s[len(romanNumDoc['romanNum']):]
                result += romanNumDoc['num']

    return result


def romanNumDocs():
    TOKENS = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M', '-', '-']]
    GENERALIZATION_INDICES = ['0', '00', '000', '01', '1', '10', '100', '1000', '02']

    result = []
    for tokenIndex in range(len(TOKENS)):
        token = TOKENS[tokenIndex]
        powOfTen = tokenIndex

        for generalizationIndex in range(len(GENERALIZATION_INDICES)):
            eachGeneralIndices = GENERALIZATION_INDICES[generalizationIndex]
            num = (generalizationIndex + 1) * pow(10, powOfTen)
            romanNum = ''
            for i in eachGeneralIndices:
                romanNum += token[int(i)]

            result.append({'romanNum': romanNum, 'num': num})

    result.reverse()
    return result
