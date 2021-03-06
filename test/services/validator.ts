import {expect} from 'chai';
import Validator from 'tp-node/services/validator';
import userSchema from 'tp-node/schemas/users';
import {ValidatorError} from 'tp-node/interfaces/validator';

describe('Service validator', (): void => {
    const validator = new Validator();

    describe('validate()', (): void => {
        it('should validate without error', (): void => {
            const user = {
                firstname: 'john',
                lastname: 'doe',
            };
            validator.validate(user, userSchema, (err: ValidatorError | null, val: object | null): void => {
                expect(err).to.be.null;
                expect(val).to.deep.equal(user);
            });
        });

        it('should validate with error', (): void => {
            const user = {
                firstname: 'john',
            };
            validator.validate(user, userSchema, (err: ValidatorError | null): void => {
                expect(err).to.be.not.null;
                expect(err && err.message).to.be.string;
            });
        });
    });
});
