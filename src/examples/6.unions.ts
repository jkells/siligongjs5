// Union types
function unionTypes(foo: number | string) {
    // Simple type guard
    if (typeof foo === "string") {
        // foo is a string here.
        return foo.toLowerCase();
    }

    // foo is a number here.
    return `${foo.toPrecision(5)}`;
}

interface Error {
    message: string;
    status: "error";
}

interface Success {
    monkeys: string[];
    status: "success";
}

type ApiResponse = Success | Error;
function handleResponse(response: ApiResponse) {
    if (response.status === "success") {
        // In here response is of type Success
        return;
    }

    // Here response is Error
    throw new Error(response.message);
}
