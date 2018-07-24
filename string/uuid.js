//生成 UUID。

// 使用cryptoAPI 生成 UUID, 符合RFC4122版本4。

// UUIDGenerator() -> '7982fcfe-5721-4632-bede-6000885be57d'

function UUIDGenerator() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	)
}

export default UUIDGenerator