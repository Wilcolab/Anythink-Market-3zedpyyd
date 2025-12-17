const assert = require('assert');
const { toCamelCase, toDotCase, toKebabCase } = require('../lib/string');

// Input validation for toCamelCase
assert.throws(() => toCamelCase(123), { name: 'TypeError', message: /expected string/i });
assert.throws(() => toCamelCase(null), { name: 'TypeError', message: /null or undefined/i });
assert.throws(() => toCamelCase(undefined), { name: 'TypeError', message: /null or undefined/i });

// Spec examples for toCamelCase
assert.strictEqual(toCamelCase('hello world'), 'helloWorld');
assert.strictEqual(toCamelCase(' hello__world-test '), 'helloWorldTest');

// Provided examples for toCamelCase
assert.strictEqual(toCamelCase('first name'), 'firstName');
assert.strictEqual(toCamelCase('user_id'), 'userId');
assert.strictEqual(toCamelCase('SCREEN_NAME'), 'screenName');
assert.strictEqual(toCamelCase('mobile-number'), 'mobileNumber');

// Additional examples for toCamelCase
assert.strictEqual(toCamelCase('  This-is_an Example!  '), 'thisIsAnExample');
assert.strictEqual(toCamelCase('convert_to-camel CASE'), 'convertToCamelCase');
assert.strictEqual(toCamelCase('version 2.0-beta'), 'version20Beta');
assert.strictEqual(toCamelCase(''), '');
assert.strictEqual(toCamelCase('éxemple test'), 'éxempleTest');

// Tests for toDotCase
assert.throws(() => toDotCase(123), { name: 'TypeError', message: /expected string/i });
assert.strictEqual(toDotCase('Hello World'), 'hello.world');
assert.strictEqual(toDotCase(' hello__world-test '), 'hello.world.test');
assert.strictEqual(toDotCase('user_id'), 'user.id');
assert.strictEqual(toDotCase('SCREEN_NAME'), 'screen.name');
assert.strictEqual(toDotCase('version 2.0-beta'), 'version.20.beta');
assert.strictEqual(toDotCase(''), '');
assert.strictEqual(toDotCase('  This-is_an Example!  '), 'this.is.an.example');

// Tests for toKebabCase
assert.throws(() => toKebabCase(123), { name: 'TypeError', message: /expected string/i });
assert.throws(() => toKebabCase('   '), { name: 'TypeError', message: /non-empty string/i });
assert.strictEqual(toKebabCase('Hello World'), 'hello-world');
assert.strictEqual(toKebabCase(' hello__world-test '), 'hello-world-test');
assert.strictEqual(toKebabCase('USER_ID'), 'user-id');
assert.strictEqual(toKebabCase('version 2.0-beta'), 'version-2-0-beta');
assert.strictEqual(toKebabCase('  This-is_an Example!  '), 'this-is-an-example');

console.log('All string tests passed');