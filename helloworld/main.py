import daft

def main() -> dict[str, list[str]]:
    df = daft.from_pydict({
        "text": ["hello", "wold"]
    })
    df.show()
    return df.to_pydict()


if __name__ == "__main__":
    main()
