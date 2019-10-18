const log = require('../lib/common/logger');

const Users = {
  async getUserList(ctx, next) {
    log.info('get user lists');
    ctx.body = 'user list';
  },

  async getOneUserInfo(ctx, next) {
    log.info('get one user info');
    ctx.body = 'one user info';
  },

  async createUser(ctx, next) {
    log.info('create one user');
    ctx.body = 'create one user success';
  },

  async updateUser(ctx, next) {
    log.info('update one user');
    ctx.body = 'update one user success';
  },

  async deleteUser(ctx, next) {
    log.info('delete one user');
    ctx.body = 'delete one user success';
  },
};

module.exports = Users;
