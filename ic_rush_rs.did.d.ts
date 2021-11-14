import type { Principal } from '@dfinity/principal';
export type AdventureResult = { 'Ok' : string } |
  { 'Err' : string };
export type ClaimResult = { 'Ok' : bigint } |
  { 'Err' : string };
export type HeaderField = [string, string];
export interface HttpRequest {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
}
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'status_code' : number,
}
export interface NftData {
  'xp' : Array<[bigint, bigint]>,
  'attr_strength' : Array<[bigint, bigint]>,
  'controllers' : Array<Principal>,
  'attr_agility' : Array<[bigint, bigint]>,
  'adventurers_log' : Array<[bigint, bigint]>,
  'level' : Array<[bigint, bigint]>,
  'mint_flag' : boolean,
  'tokens' : Array<[bigint, Principal]>,
  'claim_index' : bigint,
  'token_seeds' : Array<[bigint, bigint]>,
  'attr_intelligence' : Array<[bigint, bigint]>,
  'adventure_gap' : bigint,
  'total_supply' : bigint,
  'attribute_points' : Array<[bigint, bigint]>,
}
export interface _SERVICE {
  'add_airdrops' : (arg_0: Array<Principal>) => Promise<boolean>,
  'add_controller' : (arg_0: Principal) => Promise<boolean>,
  'add_points' : (arg_0: bigint, arg_1: bigint, arg_2: bigint) => Promise<
      AdventureResult
    >,
  'adventure' : (arg_0: bigint) => Promise<AdventureResult>,
  'claim' : () => Promise<ClaimResult>,
  'get_airdrops' : () => Promise<Array<[bigint, boolean]>>,
  'get_controllers' : () => Promise<Array<Principal>>,
  'get_mint_flag' : () => Promise<boolean>,
  'get_nft_data' : () => Promise<NftData>,
  'get_token_properties' : (arg_0: bigint) => Promise<Array<[string, string]>>,
  'http_request' : (arg_0: HttpRequest) => Promise<HttpResponse>,
  'mint_off' : () => Promise<boolean>,
  'mint_on' : () => Promise<boolean>,
  'name' : () => Promise<string>,
  'owner_of' : (arg_0: bigint) => Promise<[] | [Principal]>,
  'querygap' : (arg_0: bigint) => Promise<bigint>,
  'querylevel' : (arg_0: bigint) => Promise<bigint>,
  'querypoint' : (arg_0: bigint) => Promise<bigint>,
  'queryxp' : (arg_0: bigint) => Promise<bigint>,
  'remaining' : () => Promise<bigint>,
  'remove_controller' : (arg_0: Principal) => Promise<boolean>,
  'supply' : () => Promise<bigint>,
  'symbol' : () => Promise<string>,
  'transfer_to' : (arg_0: Principal, arg_1: bigint) => Promise<boolean>,
  'user_tokens' : (arg_0: Principal) => Promise<Array<bigint>>,
}
