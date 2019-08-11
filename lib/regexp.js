let username_regexp = /^\w+$/;
let nickname_regexp = /^(\w|[\u0080-\uffff])+$/;
const user = {
    username: {
        regexp: /^\w+$/,
        description: {
            zh_Hans: '由大小写拉丁字母，阿拉伯数字或下划线构成',
            en: 'Composed of uppercase and lowercase Latin letters, Arabic numbers or underscores'
        }
    },
    nickname: {
        regexp: /^(\w|[\u0080-\uffff]|[\u0020])+$/,
        description: {
            zh_Hans: '由大小写拉丁字母，阿拉伯数字,下划线或其他非ASCII字符构成',
            en: 'Composed of uppercase and lowercase Latin letters, Arabic numbers, underscores or other non-ASCII characters'
        }
    },
    passwordSHA256: {
        regexp: /^([0-9]|[a-f]){64}$/,
        description: {},
    },
    inviteCode: {
        regexp: /^([0-9]|[a-f]){16}$/,
        description: {},
    }
};
export { user };
