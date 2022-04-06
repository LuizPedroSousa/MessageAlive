import { left } from "@shared/core/either";
import { Cellphone } from "../entities/Cellphone";
import { InvalidCellphoneException } from "../entities/exceptions/InvalidCellphoneException";

describe("[UNIT] - [USERS] - Cellphone entity", () => {
  it("should give a cellphone entity, when given a valid cellphone", () => {
    const cellphone = "11999999999";

    const cellphoneOrError = Cellphone.create(cellphone);

    expect(cellphoneOrError.isLeft()).toBeFalsy();
    expect(cellphoneOrError.value).toEqual({ cellphone });
  });

  it("should give InvalidPhoneException, when DDD code is grater than two", () => {
    const cellphone = "111999999999";

    const cellphoneOrError = Cellphone.create(cellphone);

    expect(cellphoneOrError.isRight()).toBeFalsy();
    expect(cellphoneOrError).toEqual(
      left(new InvalidCellphoneException(cellphone))
    );
  });

  it("should give InvalidPhoneException, when DDD code is empty", () => {
    const cellphone = "999999999";

    const cellphoneOrError = Cellphone.create(cellphone);

    expect(cellphoneOrError.isRight()).toBeFalsy();
    expect(cellphoneOrError).toEqual(
      left(new InvalidCellphoneException(cellphone))
    );
  });

  it("should give InvalidPhoneException, when DDD code is less than two", () => {
    const cellphone = "1999999999";

    const cellphoneOrError = Cellphone.create(cellphone);

    expect(cellphoneOrError.isRight()).toBeFalsy();
    expect(cellphoneOrError).toEqual(
      left(new InvalidCellphoneException(cellphone))
    );
  });

  it("should give InvalidPhoneException, when first digit of DDD code is less than one", () => {
    const cellphone = "01999999999";

    const cellphoneOrError = Cellphone.create(cellphone);

    expect(cellphoneOrError.isRight()).toBeFalsy();
    expect(cellphoneOrError).toEqual(
      left(new InvalidCellphoneException(cellphone))
    );
  });

  it("should give InvalidPhoneException, when first digit of number after DDD code is different from nine", () => {
    const cellphone = "11899999999";

    const cellphoneOrError = Cellphone.create(cellphone);

    expect(cellphoneOrError.isRight()).toBeFalsy();
    expect(cellphoneOrError).toEqual(
      left(new InvalidCellphoneException(cellphone))
    );
  });
});