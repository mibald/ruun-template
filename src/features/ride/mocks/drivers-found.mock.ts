import { mockDriver } from "@features/common/mocks/driver.mock";
import { User } from "@features/common/types";

// Mock driver data
const mockDrivers: User[] = [{ ...mockDriver, uid: "1" }, { ...mockDriver, uid: "2" }, { ...mockDriver, uid: "3" }];

export { mockDrivers };