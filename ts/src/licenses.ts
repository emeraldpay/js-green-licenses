// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// License names in this list must be valid IDs defined in
// https://spdx.org/licenses/. When adding new licenses, please consult the
// relevant documents and OSPO.
const GREEN_LICENSES = [
  'Apache-2.0',
  'BSD-2-Clause',
  'BSD-3-Clause',
  'CC-BY-3.0',
  'CC0-1.0',
  'ISC',
  'LGPL-2.0',
  'LGPL-2.1',
  'LGPL-3.0',
  'MIT',
  'Unlicense',
];
export const GREEN_LICENSE_EXPR = `(${GREEN_LICENSES.join(' OR ')})`;

// List of license names that are not SPDX-conforming IDs but are allowed.
export const WHITELISTED_LICENSES = [
  'Public Domain',
];